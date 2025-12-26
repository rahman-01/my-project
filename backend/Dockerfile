# Gunakan image node resmi
FROM node:18

# Set folder kerja di dalam kontainer
WORKDIR /app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file backend
COPY . .

# Expose port sesuai aplikasi
EXPOSE 5000

# Jalankan aplikasi
CMD ["npm", "run", "dev"]


