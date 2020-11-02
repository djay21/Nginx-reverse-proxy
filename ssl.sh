sudo add-apt-repository ppa:certbot/certbot 
sudo apt-get update 
sudo apt-get install certbot  
mkdir certificates dh-param
sudo openssl dhparam -out dh-param/dhparam-2048.pem 2048
