# Nginx-reverse-proxy
Configure your <b>http</b> routes to <b>Https</b> through nginx & certbot <br><br>

1. Clone this Repo <br><br>

2. For Certbot and other dependencies installations, use the ssl.sh script
<br><b> bash ssh.sh </b><br><br>\

3. Open another terminal and Run <b> node index.js </b> <br><br>

4. Generate your Certificates, from the certbot command.

* Usage 
 <b>certbot certonly --manual --register-unsafely-without-email </b><br>
 it will prompt you for inputs, Just Accept it and enter your DNS NAME.<br>
 follow the steps you got on your terminal, like creating a file and having some alphanumeric key on it ( static server file access )
 
 Make sure you have 80,443 ports publicly accessible on that vm.
 afte few seconds,<br>
* you will get your certs generated under this directory or right on your terminal( dir path ) --> <b>/etc/letsencrypt/live/domain.com/ </b>
* Update your certs path & domain name in <b>"certificates folder"</b> in the cloned repo

Note: Upto this step, the process can be run on any other machine having 80,443 port access of your machine in which you want to set up https.


5. Edit your proxy_pass url in the production.conf file <br>
 proxy_pass http://privateip:8000  
 <br> 8000 is the port on which your service is running 
 <br> you can use both public and private ip in your proxy_pass setting.
 
6. if you want to server more than one port on https, copy paste the server ssl {} and paste it again in the production.conf file and edit your proxy_pass port of another service. <br><br>

7. RUN your nginx.exe, /usr/bin/nginx or docker container in order to start your nginx server <br>.
  
