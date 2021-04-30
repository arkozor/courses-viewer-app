module.exports = {
    env: {
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
