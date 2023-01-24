import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import aa from "./Texnik.module.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
const Texnik = () => {
  return (
    <div className={aa.ab_col}>
      <div className={aa.class_link}>
        <Link to="/Section">
          <b className={aa.class_b}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </b>
        </Link>
      </div>
      <div className={aa.text_h1}>
        <h3>МАТОЧНОЕ ПОГОЛОВЬЕ</h3>
      </div>

      <div className={aa.input_text}>
        <div className={aa.menu_text}>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(-) </h6>{" "}
              </sup>
              Идентификационный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(-) </h6>{" "}
              </sup>
              Инвентарный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Место рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Линия
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
        </div>

        <div className={aa.menu_text}>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Породность
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Семейство
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Кому принадлежит
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(?) </h6>{" "}
              </sup>{" "}
              Назначение коровы
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>{" "}
              Масть и приметы
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Группа крови
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
        </div>

        <div className={aa.menu_text}>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Происхождение
              <br /> (если родилась не в хозяйстве)
            </Form.Label>
            <Col>
              <select class="form-select" aria-label="Default select example">
                <option selected>Генеалогия - отец (О)</option>
                <option value="1">Генеалогия - мать (М)</option>
                <option value="2">Генеалогия - отец отца (ОО)</option>
                <option value="3">Генеалогия - мать отца (МО)</option>
                <option value="4">Генеалогия - отец матери (ОМ)</option>
                <option value="5">Генеалогия - мать матери (ММ)</option>
                <option value="6">Генеалогия - отец отца отца (ООО)</option>
                <option value="7">Генеалогия - мать отца отца (МОО)</option>
                <option value="8">Генеалогия - отец матери отца (ОМО)</option>
                <option value="9">Генеалогия - мать матери отца (ММО)</option>
                <option value="10">Генеалогия - отец отца матери (ООМ)</option>
                <option value="11">Генеалогия - мать отца матери (МОМ)</option>
                <option value="12">
                  Генеалогия - отец матери матери (ОММ)
                </option>
                <option value="13">
                  Генеалогия - мать матери матери (МММ)
                </option>
              </select>
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              О - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              О - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              О - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              М - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              М - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              М - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ОО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ООО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ООО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ООО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОМО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММО - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММО - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ММО - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ООМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ООМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ООМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОМ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОМ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МОМ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ОММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ОММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МММ - индивидуальный номер
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МММ - кличка
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              МММ - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Живая масса при рождении, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Живая масса в 6 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Живая масса в 10 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Живая масса в 12 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Живая масса в 18 месяцев, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Живая масса при первом осеменении, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Возраст первого осеменения, мес.
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата осеменения (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Номер осеменения (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Индивидуальный номер <br /> быка-осеменителя (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Кличка быка-осеменителя (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>{" "}
              Метод случки (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Дата исследования на стельность (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>{" "}
              Результат исследования на стельность (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата отела (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>{" "}
              Результат отела (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>
              Легкость отела (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Индивидуальный номер приплода (один ко многим) (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата запуска (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Продолжительность сервис-периода, дней (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Продолжительность сухостойного периода, дней (1-20)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата контрольного доения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Результат контрольного доения - удой, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Результат контрольного доения - жир, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Результат контрольного доения - белок, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
        </div>

        <div className={aa.menu_text}>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              Время доения, мин.
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Скорость молокоотдачи, кг/мин.
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) (?)</h6>{" "}
              </sup>{" "}
              Балл за скорость молокоотдачи
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Удой за всю лактацию, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Удой за 305 дней, кг
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Жир за всю лактацию, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Жир за 305 дней, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Белок за всю лактацию, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              Белок за 305 дней, %
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата запуска
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              Количество дойных дней
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              . Перемещение - откуда
              <br /> (наименование хозяйства/фирмы)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Перемещение - куда (наименование хозяйства)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Перемещение - дата
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Перемещение - возраст
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Перемещение - живая масса
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>
              Перемещение - цель перемещения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              Дата выбытия
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(/) </h6>{" "}
              </sup>
              Причина выбытия Линейная <br /> оценка системы Б, согласно 2017 г.
              (ЛО/Б)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/А/Б - дата оценки
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/А/Б - индивидуальный номер коровы
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              ЛО/А/Б - дата рождения
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              ЛО/А/Б - дата отела
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>
              ЛО/А/Б - день лактации
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/А/Б - индивидуальный номер отца
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - рост (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - глубина туловища (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - ширина груди (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - молочный тип (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - положение таза (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - ширина таза (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - постановка задних ног (вид сбоку) (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - угол копыт (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - постановка задних ног (вид сзади) (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - качество костяка (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - прикрепление передних долей вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - глубина вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ЛО/Б - высота прикрепления задних долей вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - центральная связка вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - расположение передних сосков вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ЛО/Б - расположение задних сосков вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - длина сосков (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - длина крестца (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - линия верха (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ЛО/Б - обмускуленность (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - упитанность (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - скакательный сустав (вид сзади) (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - легкость движения (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - ширина задних долей вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - баланс вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - выраженность вен вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - длина передних долей вымени (от 1-9)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/Б - толщина сосков (от 1-9) <br />
              Линейная оценка системы А, согласно 2017 г. (ЛО/А)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/А - молочный тип (от 50-100)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ЛО/А - объем туловища (от 50-100)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              ЛО/А - конечности (от 50-100)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              ЛО/А - вымя (от 50-100)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(+) </h6>{" "}
              </sup>{" "}
              ЛО/А - итоговая оценка (от 1-100)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(?) </h6>{" "}
              </sup>{" "}
              экстерьер по бонитировке
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              мягкая спина (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              горбатая спина (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              слабая поясница (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              крыловидные лопатки (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              перехват за лопатками (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              неровная линия верха (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              высокая постановка хвоста (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              . запавший корень хвоста (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              крышевидный крестец (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              шилозадость (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              размет передних ног (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              мягкие бабки (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              большая межкопытная щель (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              наклонное дно вымени (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              дополнительные соски (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              неправильная форма сосков (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              очень тонкие соски (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>
              перекрещивающиеся задние соски (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>{" "}
          <Row className={aa.row_a}>
            <Form.Label className={aa.label_1} column="sm" lg={2}>
              <sup>
                {" "}
                <h6>(*) </h6>{" "}
              </sup>{" "}
              атрофия долей вымени (да/нет)
            </Form.Label>
            <Col>
              <Form.Control size="sm" type="text" placeholder="Small text" />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Texnik;
