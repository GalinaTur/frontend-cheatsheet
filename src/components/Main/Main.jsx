import store from '../../store'
import styles from './Main.modules.css'
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import { CodeBlock, monokai } from 'react-code-blocks';

function Main() {
    return store && (
        <main>
            <Container fluid='sm' bsPrefix={styles.container}>
                <Accordion defaultActiveKey={store.map((e, id) => id)} alwaysOpen>

                    {store.map((section, id) => {
                        return (
                            <Accordion.Item eventKey={id} key={section.title}>
                                <Accordion.Header>{section.title}</Accordion.Header>
                                <Accordion.Body >
                                    <Accordion defaultActiveKey="0">
                                        {section.subsections.map((subsection, id) => {
                                            return (
                                                <Accordion.Item eventKey={id} key={`${section.title}_${subsection.title}`}>
                                                    <Accordion.Header id={`${section.title}_${subsection.title}`}>{subsection.title}</Accordion.Header>
                                                    <Accordion.Body>
                                                        {subsection.questions.map((question, id) => {
                                                            return (
                                                                <div className={styles.questionCard} key={`${section.title}_${subsection.title}_${id}`}>
                                                                    <h5>{`${id + 1}. ${question.question}`}</h5>
                                                                    {question.answer}
                                                                    {question.code &&
                                                                        <CodeBlock text={question.code} language='html' theme={monokai} />}
                                                                </div>
                                                            )
                                                        })}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )
                                        })}
                                    </Accordion>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    })}
                </Accordion>
            </Container>
        </main>
    );
}

export default Main;