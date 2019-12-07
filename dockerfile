FROM nginx
COPY default /etc/nginx/conf.d/default.conf
ADD dist /usr/share/nginx/html
CMD nginx -g "daemon off;"
