import {Context} from "../App";

export default function FullUsers(props) {


    const {items} = props;
    return (
        <Context.Consumer>
            {(contextData) => {
                return (<div>
                    {items.map(value => (<div>{value.id}-{value.name}-{contextData}</div>))}
                </div>);
            }
            }
        </Context.Consumer>
    );
}
