# Gunakan Node.js versi LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Angular CLI global
RUN npm install -g @angular/cli

# Copy seluruh source code
COPY . .

# Expose port Angular
EXPOSE 4200

# Jalankan Angular dev server dengan proxy
CMD ["ng", "serve", "--host", "0.0.0.0", "--proxy-config", "proxy.conf.json"]
