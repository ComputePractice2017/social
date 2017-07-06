cd social-web
npm install
npm run build
cd ..
docker build -t social-web -f Dockerfile.web 