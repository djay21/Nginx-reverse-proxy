# Nginx-reverse-proxy
Certbot installation

sudo add-apt-repository ppa:certbot/certbot
sudo apt update -y
sudo apt install python-certbot-nginx -y

* Usage 
 certbot -d domain.com 
#certbot -d domain.com --register-unsafely-without-email

* you will get your certs under this directory --> <b>/etc/letsencrypt/live/domain.com/ </b>

* Update your certs path & domain name in "/etc/nginx/sites-available/default"

* Restart your nginx service 
systemctl restart nginx
