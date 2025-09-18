const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
         host: 'redis-19625.c12.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 19625
    }
});

module.exports = redisClient;