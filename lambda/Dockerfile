FROM public.ecr.aws/lambda/nodejs:18.2023.04.17.20

WORKDIR /var/task

COPY package.json ./

RUN yum install -y python3 make gcc-c++ cmake gzip && \
    yum clean all && \
    rm -rf /var/cache/yum

RUN npm install

RUN npm install -S hnswlib-node

COPY . .

ARG OPENAI_API_KEY

ENV OPENAI_API_KEY=${OPENAI_API_KEY}

CMD ["index.handler"]
