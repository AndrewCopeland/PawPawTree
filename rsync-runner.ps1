$waitSeconds = (60)

while($true) {
    # node index.js
    ubuntu1804.exe run 'rsync -avzh /mnt/c/Users/andco/git/AndrewCopeland/PawPawTree/data/delegators root@bananonumber.cc:/home/github/pawpawtree/api/delegators'
    Start-Sleep -Seconds $waitSeconds
}