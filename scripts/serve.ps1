# Native PowerShell HTTP Server for local network preview on http://192.168.10.115:8080
$port = 8080
$publicDir = "c:\Users\admin\Documents\Match_Ticket_Website\public"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Prefixes.Add("http://127.0.0.1:8080/")

try {
    $listener.Start()
    Write-Host "🚀 Local Server successfully running at http://192.168.10.115:8080/"
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath.TrimStart('/')
        if ([string]::IsNullOrEmpty($localPath)) { $localPath = "index.html" }
        
        $filePath = Join-Path "c:\Users\admin\Documents\Match_Ticket_Website\public" $localPath
        if (-not (Test-Path $filePath -PathType Leaf)) {
            $filePath = Join-Path "c:\Users\admin\Documents\Match_Ticket_Website\public" "index.html"
        }
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            if ($filePath.EndsWith(".html")) { $response.ContentType = "text/html; charset=utf-8" }
            elseif ($filePath.EndsWith(".js")) { $response.ContentType = "application/javascript" }
            elseif ($filePath.EndsWith(".css")) { $response.ContentType = "text/css" }
            elseif ($filePath.EndsWith(".png")) { $response.ContentType = "image/png" }
            elseif ($filePath.EndsWith(".jpg") -or $filePath.EndsWith(".jpeg")) { $response.ContentType = "image/jpeg" }
            elseif ($filePath.EndsWith(".svg")) { $response.ContentType = "image/svg+xml" }
            elseif ($filePath.EndsWith(".txt")) { $response.ContentType = "text/plain; charset=utf-8" }
            elseif ($filePath.EndsWith(".json")) { $response.ContentType = "application/json" }
            
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
        }
        $response.Close()
    }
} catch {
    Write-Host "Server listener error: $_"
} finally {
    if ($null -ne $listener -and $listener.IsListening) {
        $listener.Stop()
    }
}
