const base = {
    get() {
                return {
            url : "http://localhost:8080/ssm2k04k/",
            name: "ssm2k04k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm2k04k/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "校园美食交流系统"
        } 
    }
}
export default base
