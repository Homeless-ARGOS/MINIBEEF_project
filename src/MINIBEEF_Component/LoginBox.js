import React, { Component } from 'react';

class LoginBox extends Component {
    render() {
        return (
            <div id="login-box">
                <table>
                    <h2><strong>로그인</strong></h2>
                    <tr>
                        <td>ID : </td> <td><input placeholder='아이디'/></td>
                    </tr>

                    <tr>
                        <td>PW : </td> <td><input placeholder='비밀번호' type='password'/></td>
                    </tr>
                    
                </table>
                <a href="">회원가입</a>
            </div>
        )
    }
}

export default LoginBox