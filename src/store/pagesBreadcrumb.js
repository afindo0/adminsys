/**
 *  标签页状态
 */
export default {
    state: {
        breadcrumbList: [],
    },
    getters: {
        breadcrumbList({ breadcrumbList }) {
            return breadcrumbList
        },
    },
    mutations: {
        setBreadcrumb(state, payload) {
            const { level } = payload.to.meta
            const { fromPath = '', name = '' } = payload.to.query
            const toMatched = payload.to.matched
            const breadcrumbList = []
            toMatched.forEach((item, index) => {
                if (index > 0) {
                    const { path, meta } = item
                    const nameCopy = item.name
                    const obj = { name: nameCopy, path, meta }
                    breadcrumbList.push(obj)
                }
            })
            if (level > 2) {
                const obj = { path: fromPath, name }
                breadcrumbList.splice(-1, 0, obj)
            }
            state.breadcrumbList = breadcrumbList
            // if (level < 3) {
            //     state.breadcrumbList = toMatched.splice(1)
            // }
            // if (level > 2) {
            //     state.breadcrumbList = fromMatched.splice(1)
            //     state.breadcrumbList.push(toMatched.pop())
            // }
        },
    },
}
