module.exports = {
    env: {
        COURSE_API: 'http://idboard.net:43001/api/courses',
        USER_API: 'http://idboard.net:43001/api/users',
        AUTH_API: 'http://idboard.net:43001/api/auth',
        SEARCH_API: 'http://idboard.net:43001/api/search',
        DOMAIN_API: 'http://idboard.net:43001/api/domains',
        CATEGORY_API: 'http://idboard.net:43001/api/categories',
        THEME_API: 'http://idboard.net:43001/api/themes',
        COMMENT_API: 'http://idboard.net:43001/api/comments',
        AVATAR_API: 'http://idboard.net:43001/api/users/avatar',
        APP_ENV: 'local'
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
