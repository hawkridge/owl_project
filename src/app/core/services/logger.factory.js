function loggerService() {
    function l() {
        console.log('LOG 123');
    }

    return {
        l:l
    }
}


export default loggerService;
