import React from "react";

interface IData {
    text: string;
    name: string;
}

function UseStatePage() {
    const [data, setData] = React.useState<IData>({} as IData);

    return (
        <div>
            <h2>useState (TypeScript)</h2>

            <input type="text" value={data.text} 
            //onChange={(e) => setData({...data, text: e.target.value})} 
            onChange={(e) => setData(prev => ({...prev, text: e.target.value}))} 
            
            />
            <p>
                <b>текст: </b>
                {data.text}
            </p>
            <br />
            <br />
            <pre>
            {`
            interface IData {
                text: string;
                name: string;
            }

            const [data, setData] = React.useState<IData>({} as IData);

            input type="text" value={data.text} 
                //onChange={(e) => setData({...data, text: e.target.value})} 
                onChange={(e) => setData(prev => ({...prev, text: e.target.value}))} 
            />
            `}
            </pre>
        </div>
    );
}

export default UseStatePage;
