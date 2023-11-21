import React,{Component} from "react";
import { Col, Container, Nav, TabContainer, TabContent, TabPane } from "react-bootstrap";


export default class About extends Component{
    render(){
        return(
            <div>
               <Container>
                <TabContainer id = "ledt-tabs-example" defaultActiveKey="first">
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column mt-2">  {/* робимо 5 вкладок */}
                            <Nav.Item>
                                <Nav.Link eventKey="first" >Design</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second" >Team</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth" >Frameworks</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth" >Libraries</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9} className="mt-3">
                        <TabContent>
                            <TabPane eventKey="first"> {/* прописуємо, що в нас буде робитись в 1 вкладці */}
                                <img src ="https://figmaelements.com/wp-content/uploads/2019/11/gift-shop-website-template.png"></img>
                                <p>
                                Figma - це інноваційний веб-сервіс для дизайну та прототипування,
                                 який надає можливість командам спільно працювати над проектами у реальному часі, 
                                 використовуючи потужні інструменти для створення високоякісних інтерфейсів.
                                </p>
                            </TabPane>
                            <TabPane eventKey="second"> 
                                <img src ="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg"></img>
                                <p>
                                Ефективна командна робота вимагає взаєморозуміння, 
                                співпраці та взаємодії між членами групи, 
                                спрямованими на досягнення спільної мети.
                                </p>
                            </TabPane>
                            <TabPane eventKey="third"> 
                                <img src ="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/computer-coding.jpg"></img>
                                <p>
                                Програмування - це творчий процес створення програмного забезпечення,
                                 який включає в себе написання коду для вирішення конкретних завдань чи проблем. 
                                </p>
                            </TabPane>
                            <TabPane eventKey="fourth"> 
                                <img src ="https://jumpgrowth.com/wp-content/uploads/2021/01/10-Web-Development-Frameworks.png"></img>
                                <p>
                                Фреймворки - це основа для розробки програмного забезпечення, 
                                надаючи структуру та готові компоненти, що спрощують роботу розробникам.
                                </p>
                            </TabPane>
                            <TabPane eventKey="fifth"> 
                                <img src ="https://img.atlasobscura.com/opE-8urhmBCzuU9xG-3lc1aIFM52uBJmQLGLWGei2e4/rs:fill:12000:12000/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy81YWViYjhkYy04/OGIyLTRjNTItOTA2/Mi1iZGMzNTY0Mzkz/ZTljODM1OTkzYmQw/NTMyOWFlYzZfMzQ4/MDA4NjI5NDBfZjdm/M2E3ZTU5Nl9rLmpw/Zw.jpg"></img>
                                <p>
                                Бібліотеки - це набір підготовлених функцій та процедур, 
                                які допомагають розробникам виконувати конкретні завдання без необхідності написання коду з нуля,
                                 що полегшує та прискорює процес програмування.
                                </p>
                            </TabPane>
                        </TabContent>
                    </Col>
                </TabContainer>
               </Container>
            </div>
        )
    }
}
