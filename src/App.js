/* eslint-disable import/first */

import React, { Component } from 'react';
import './App.css';

import Navi from './ire0546_Component/NavigationBar'
import Arti from './MINIBEEF_Component/ArticleList'
import Write from './HOLOLO_Component/Write'

class App extends Component {
  constructor(props) {
    super(props);
    var max_content_id = 8;
    this.state = {

      /* mode === write : 글쓰기 모드 */
      /* mode === welcome : 글 목록 */
      mode:'welcome',

      /* 작성된 글 목록 */
      contents:[
        {id:1, title:'퇴근하고싶어용', author:'박민', date:'2020-03-16'},
        {id:2, title:'아르고스 너무 조아용 홍홍', author:'김도희', date:'2020-03-16'},
        {id:3, title:'저두용 홍홍', author:'서연주', date:'2020-03-16'},
        {id:4, title:'선배님 밥사주세용 홍홍', author:'고태완', date:'2020-03-16'},
        {id:5, title:'쓸 글이 없어용', author:'박민', date:'2020-03-16'},
        {id:6, title:'리액트 너무 재밌어용', author:'김도희', date:'2020-03-16'},
        {id:7, title:'깃허브도 너무 재밌어용', author:'서연주', date:'2020-03-16'},
        {id:8, title:'빨리 merge나 하셈용 ㅎㅎ', author:'고태완', date:'2020-03-16'},
      ]
    }
  }

  render() {
    var display = []; // 페이지를 동적으로 로드하기 위한 리스트
    var data = this.state.contents; // 글 목록
    var articles = [] // 글 목록을 props로 전달하기 위해 HTML로 묶인 것들

    /* state를 HTML 코드로 변환 => articles 리스트에 들어감 */
    for(var i = 0; i < data.length; i++) {
        console.log(data[i])
        articles.push(
            <tr>
                <td class="title">{data[i].title}</td>
                <td class="writer" width="20%">{data[i].author}</td>
                <td class="write-date" width="20%">{data[i].date}</td>
            </tr>
        )
    }

    /* 현재 모드에 따라 컴포넌트를 생성함 */
    if(this.state.mode === 'welcome') {
      display.push(<Navi></Navi>);
      display.push(<Arti articles={articles}></Arti>);
      display.push(<button onClick={function() {
        this.setState({mode:'write'});
      }.bind(this)}>글쓰기</button>); // 버튼을 눌렀을 때 모드를 바꿔야하므로 컴포넌트 내부가 아닌 App.js에 생성
    } else if(this.state.mode === 'write') {
      display.push(<Navi></Navi>);
      display.push(<Write onChangePage={function(_title, _author, _date) {
        this.max_content_id = this.max_content_id + 1;

        /* state에 글을 추가함 */
        var _contents = this.state.contents.concat(
          {id:this.max_content_id, title:_title, author:_author, date:_date}
        );
        this.setState({contents:_contents});
        
        /* Write 컴포넌트 내부에서 제출 버튼을 눌렀을 때 모드를 변경 */
        this.setState({mode:'welcome'});
      }.bind(this)}></Write>)
    }

    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;
