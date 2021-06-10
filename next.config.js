module.exports = {
    env: {
        COURSE_API: 'http://idboard.net:43001/api/courses',
        USER_API: 'http://idboard.net:43001/api/user/me',
        AUTH_API: 'http://idboard.net:43001/api/auth',
        SEARCH_API: 'http://idboard.net:43001/api/search',
        DOMAIN_API: 'http://idboard.net:43001/api/domains',
        CATEGORY_API: 'http://idboard.net:43001/api/categories',
        THEME_API: 'http://idboard.net:43001/api/themes',
        AVATAR_API: 'http://idboard.net:43001/api/users/avatar',
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
    },

    // matching all API routes
    source: '/api/:path*',
    headers: [
        { key: 'Access-Control-Allow-Credentials', value: 'true' },
        { key: 'Access-Control-Allow-Origin', value: '*' },
        {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
        },
        {
            key: 'Access-Control-Allow-Headers',
            value:
                'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        }
    ]
}
