module.exports = {
    env: {
        COURSE_API: 'http://idboard.net:43001/api/courses',
        USER_API: 'http://idboard.net:43001/api/user/me',
        AUTH_API: 'http://idboard.net:43001/api/auth',
        APP_ENV: 'local',
        FLAGSMITH_ENV_KEY: 'Jy7QznRFqoWmnBDW47Pi8c'
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/
            },
            use: ['@svgr/webpack']
        })

        return config
    }
}
