/**
 * Report Builder
 * @mermaid
 * sequenceDiagram
 *  participant App
 *  participant Post
 *  App->>Post:posts({postsnumber})
 *  Post->>App:ProjectObject
 *  App->>Post:search()
 *  Post->>App:IssueObject[]
 */
class ReportBuilder {
    constructor(args) {

    }
}