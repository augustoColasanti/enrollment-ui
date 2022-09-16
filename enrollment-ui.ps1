$desc = $args[0]

if ($desc -eq "install") {
    Write-Host "Installing enrollment-ui..."
    npm install
} elseif ($desc -eq "run") {
    Write-Host "Running enrollment-ui..."
    npm start
} elseif ($desc -eq "test") {
    Write-Host "Testing enrollment-ui..."
    npm test -- a --coverage
} elseif ($desc -eq "deploy") {
    Write-Host "Deploying enrollment-ui..."
    npm run build
}
