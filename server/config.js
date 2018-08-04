const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export const log = function(msg) {
    console.info('**************');
    console.info(msg);
    console.info('**************');
}
export default {
    port: env.PORT || 3000,
    DB: 'mongodb://localhost:27017/attire'
};