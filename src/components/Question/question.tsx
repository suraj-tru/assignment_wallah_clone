"use client";
import Head from "next/head";
import style from "./question.module.css";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import Image from "next/image";

export default function question() {
  return (
    <>
      <div className={style.mian_con}>
        <div className={style.sub_con}>
          <div className={style.image_box}></div>
          <div className={style.accordion_con}>
            <h2>Most Popular Questions Related To Assignment Wallah</h2>
            <Accordion>
              <AccordionItem>
                <AccordionHeader>
                  <h3 className={`accordion-title`}>Title 1</h3>
                </AccordionHeader>

                <AccordionBody>
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>
                  <h3 className={style.accordion_title}>Title 1</h3>
                </AccordionHeader>

                <AccordionBody>
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </AccordionItem>
              <AccordionItem>
                <AccordionHeader>
                  <h3 className={`accordion-title`}>Title 1</h3>
                </AccordionHeader>

                <AccordionBody>
                  <div className="accordion-body">
                    Lorem ipsum dolor sit amet.
                  </div>
                </AccordionBody>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}
