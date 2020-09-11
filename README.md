# Nginx-reverse-proxy
Configure your <b>http</b> routes to <b>Https</b> through nginx & certbot <br><br>




Certbot installation

<b>sudo add-apt-repository ppa:certbot/certbot <br>
sudo apt update -y <br>
sudo apt install python-certbot-nginx -y </b><br>

* Usage 
 <b>certbot -d domain.com <br>
#certbot -d domain.com --register-unsafely-without-email</b>

* you will get your certs under this directory --> <b>/etc/letsencrypt/live/domain.com/ </b>

* Update your certs path & domain name in <b>"/etc/nginx/sites-available/default"</b>

* Restart your nginx service 
<b>systemctl restart nginx </b>
