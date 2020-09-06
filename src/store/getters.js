/**相当于计算属性，当依赖多个state中值或需要过滤某个state中的值时使用
 * list: [1, 3, 5, 7, 9, 20, 30]
 */
const getters = {
  /**如下 */
  // filteredList: state => {
  //   return state.list.filter(item => item > 5)
  // }
}
export default getters
