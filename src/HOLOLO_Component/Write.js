import React, { Component } from 'react';
import './Write.css';

class Write extends Component {
    /* input 내용 */
    state = {
        title: ''
    }
    
    /* input 내용이 바뀌었을 때, 이를 state에 적용함 */
    handleChange = (e) => {
        this.setState({
          title: e.target.value
        })
    }

    render() {
        return (
            <div id="WriteForm">
                <form>
                    <table id="WriteTable">
                        <tr>
                            <th scope="col">
                                Title:
                            </th>
                            <td>
                                <input
                                    placeholder='input title'
                                    value={this.state.title}
                                    onChange={this.handleChange}>
                                    </input>
                            </td>
                        </tr>
                        
                        <tr>
                            <th scope="col">
                                Content:
                            </th>
                            <td>
                                <textarea id="ContentForm" type="text" placeholder='input content'></textarea>
                            </td>
                        </tr>
                    </table>

                    
                    <button onClick={function() {
                        alert('글이 등록 되었습니다.')
                        this.props.onChangePage(this.state.title, '박민', '2020-04-02'); // App.js에 선언된 함수(state에 글 목록을 추가) 호출
                    }.bind(this)}>작성완료!</button>
                </form>
            </div>
        )
    }
}

export default Write