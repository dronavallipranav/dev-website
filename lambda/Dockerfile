FROM public.ecr.aws/lambda/nodejs:18.2023.04.17.20

WORKDIR /var/task

# Copy package.json to work directory
COPY package.json package-lock.json ./

# Install required system packages
RUN yum install -y python3 make gcc-c++ cmake gzip && \
    yum clean all && \
    rm -rf /var/cache/yum

# Install Node.js dependencies
RUN npm install

# Install hnswlib-node 
RUN npm install -S hnswlib-node

# Copy the rest of the application
COPY . .

ARG OPENAI_API_KEY_ARG

ENV OPENAI_API_KEY=$OPENAI_API_KEY_ARG

CMD ["index.handler"]
