Add-Type -AssemblyName System.Drawing

$src = "c:\Users\admin\Documents\Match_Ticket_Website\public\matchticket_logo.png"
$dest = "c:\Users\admin\Documents\Match_Ticket_Website\public\matchticket_logo.png"
$backup = "c:\Users\admin\Documents\Match_Ticket_Website\public\matchticket_logo_orig.png"

if (-not (Test-Path $backup)) {
    Copy-Item $src $backup
}

$img = [System.Drawing.Image]::FromFile($backup)
$newWidth = 512
$newHeight = [int]($img.Height * ($newWidth / $img.Width))

$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.DrawImage($img, 0, 0, $newWidth, $newHeight)

$img.Dispose()
$g.Dispose()

$bmp.Save($src, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

$size = (Get-Item $src).Length
Write-Host "Compressed logo size: $size bytes"
