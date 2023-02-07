const config={
    screens:{
        Home: {
            path: "home/:id",
            parse:{
                id: (id) => `${id}`,
            },
        },
        newPasswordScreen: {
            path: "newPasswordScreen"
        }
    }
}

const linking = {
    prefixes: ["demo://app"],
    config,
};

export default linking;