import { useState } from 'react';

export default function useLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] =useState(false);
    const [textComponent] = useState({
        header: {
            text: "Blackboard"
        },
        title: {
            text: "เข้าสู่ระบบ"
        },
        labal: {
            email: {
                text: "ชื่อบัญชี/อีเมล/เบอร์โทรศัพท์"
            },
            pass: {
                text: "หรัสผ่าน"
            }
        },
        button: {
            login: {
                text: "เข้าสู่ระบบ"
            },
            regis: {
                text: "ลงทะเบียน"
            }
        }
    });

    return { username, password, showPassword, textComponent, setUsername, setPassword, setShowPassword }

}