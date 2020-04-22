import React, { Component } from 'react';
import './ArticleList.css'

class ArticleList extends Component {
    render() {
        return (
            <div id="article-list">
                <table width="70%" cellSpacing="0" align="center" border-top="1px solid #444444" border-collapse="collapse">
                    {/* @thead : 제목 작성자 날짜 표시 */}
                    <thead>
                        <th scope="col"><span>제목</span></th>
                        <th scope="col"><span>작성자</span></th>
                        <th scope="col"><span>날짜</span></th>
                    </thead>

                    {/* @tbody : 글 목록 */}
                    {/* @props.articles : App.js의 contents state를 받아옴*/}
                    <tbody>{this.props.articles}</tbody>
                </table>
            </div>
        )
    }
}

export default ArticleList