#! C:\Program Files\Git\usr\bin\bash.exe

#create the main distribution folder
rm -rf dist
mkdir dist

cd front-end
npm run build
