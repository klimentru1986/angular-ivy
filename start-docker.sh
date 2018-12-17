yarn build --prod --aot --output-hashing none
docker rm -f ivy-container
docker build -t ivy:latest .
docker run -p 4201:80 --name ivy-container -d ivy:latest