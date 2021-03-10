# add image
FROM node:13.12.0-alpine

# set env 
ENV tmp_dir /tmp

# install global dependencies
RUN npm install -g json-server json-server-auth express

# add a user
RUN echo '{"users": [{"_id": "5eefa8efc52fce44df707b7e","name": "Example User", "email": "example@boilerplate.com","password": "$2a$10$VZRxP6BM79j4I.9Yn1a.berkI67hZtmEwuIyJpmhEJ7vCzRn839x."}]}' > /tmp/db.json

# add entry point
ENTRYPOINT ["json-server-auth", "--port", "4000", "--host", "0.0.0.0"]

CMD ["/tmp/db.json"]