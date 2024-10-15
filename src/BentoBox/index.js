import React, {
    createRef,
    useState,
    useEffect,
    useRef,
    cloneElement,
  } from "react";
  import { BentoLayoutBox, BentoLayoutColumn, BentoLayoutWrp } from "./index.sc";
  
  const BentoBox = ({ dataRoll, contentWrapperHeight }) => {
    const [l0, setL0] = useState(1);
    const [l2, setL2] = useState(0);
  
    const colsRefs = useRef([]);
    colsRefs.current = Array.from({ length: 3 }, (_, i) => colsRefs.current[i] ?? createRef());
    
    const boxRefs = useRef([]);
    boxRefs.current = Array.from({ length: 6 }, (_, i) => boxRefs.current[i] ?? createRef());
  
    const bentoRoot = useRef(null);
  
    useEffect(() => {
      clearExpanction();
      colsRefs.current[0].current?.classList.add("expandedColumn");
      boxRefs.current[0].current?.classList.add("expandedTop");
      boxRefs.current[1].current?.classList.add("expandedBottom");
    }, []);
  
    const clearExpanction = () => {
      const columns = bentoRoot?.current?.querySelectorAll(".col");
      columns.forEach(ele => ele?.classList.remove("expandedColumn"));
  
      const boxes = bentoRoot?.current?.querySelectorAll(".box");
      boxes.forEach(ele => {
        ele?.classList.remove("expandedTop");
        ele?.classList.remove("expandedBottom");
      });
    };
  
    const setExpansion = (col, boxNum) => {
      clearExpanction();
  
      const a = col * 2 - boxNum;
      const b = a % 2 === 0 ? a - 1 : a + 1;
      setL0(b - 1);
      setL2(a - 1);
      colsRefs.current[col - 1]?.current?.classList.add("expandedColumn");
      boxRefs.current[a - 1]?.current?.classList.add("expandedTop");
      boxRefs.current[b - 1]?.current?.classList.add("expandedBottom");
    };
  
    return (
      <BentoLayoutWrp ref={bentoRoot}>
        {dataRoll.map((data, i) => {
          return (
            <BentoLayoutColumn className="col" key={data.id || i} ref={colsRefs.current[i]}>
              <BentoLayoutBox
                className="box"
                onClick={() => setExpansion(i + 1, 1)}
                ref={boxRefs.current[i * 2 + 0]}
              >
                {cloneElement(data.segment[0].component || <></>, {
                  level: i * 2 + 0 === l0 ? "l0" : i * 2 + 0 === l2 ? "l2" : "l1",
                })}
              </BentoLayoutBox>
              <BentoLayoutBox
                className="box"
                onClick={() => setExpansion(i + 1, 0)}
                ref={boxRefs.current[i * 2 + 1]}
              >
                {cloneElement(data.segment[1].component || <></>, {
                  level: i * 2 + 1 === l0 ? "l0" : i * 2 + 1 === l2 ? "l2" : "l1",
                })}
              </BentoLayoutBox>
            </BentoLayoutColumn>
          );
        })}
      </BentoLayoutWrp>
    );
  };
  
  export default BentoBox;
  