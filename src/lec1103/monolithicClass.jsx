import * as React from "react";
const id = (function*(){
    let i = 0;
    while (true) {
        yield i++;
    }
}) ();
class MonolithicComp extends React.Component{
    state = {
        articals:[
            {id: id.next(), title: "Title1", summary: "Summary 1", display: "none"},
            {id: id.next(), title: "Title2", summary: "Summary 2", display: "none"},
            {id: id.next(), title: "Title3", summary: "Summary 3", display: "none"},
        ],
        title: "",
        summary: "",
        
    };
    onChangeTitle = (e) => {
        this.setState({title: e.target.value});
    };
    onChangeSummary = (e) => {
        this.setState({summary: e.target.value});
    };
    onClickAdd = () => {
        this.setState((state) =>({
            articals: [...state.articals, {
                id: id.next(),
                title: state.title,
                summary: state.summary,
                display: "none",
            },
        ],
        title: "",
            summary: "",
        }));
        };
        onClicktoggle = (id) => {
            this.setState((state) =>{
                const articals = [...state.articals];
                const index = articals.findIndex((articals) => articals.id === id);
                articals[index] = {
                    ...articals[index],
                    display: articals[index].display === "none"? "block" : "none",
                }
                return{...state, articals};
            });
            
        };
        onClickRmove = (id) => {
            this.setState((state) => ({
                articals: state.articals.filter((i) => i.id!== id),
            }));
        };
        render(){
            const { articals, title, summary } = this.state;
            return (
                <div>
                    <input  value={title} onChange={this.onChangeTitle} />
                    <input value={summary} onChange={this.onChangeSummary} />
                    <button onClick={this.onClickAdd}>Add</button>
                    <br />
                    <ul>
                        {articals.map((artical) => (
                            <li key={artical.id}>
                                <h2>{artical.title}</h2>
                                <p>{artical.summary}</p>
                                <button onClick={()=>this.onClicktoggle(artical.id)}>Toggle</button>
                                <button onClick={()=>this.onClickRmove(artical.id)}>Remove</button>
                                {artical.display === "block" && <p>{artical.summary}</p>}
                            </li>
                        ))}
                    </ul>
                    </div>
            )
        }
    
    }

export default MonolithicComp;