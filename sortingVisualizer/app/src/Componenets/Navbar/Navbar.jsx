import React from "react";
import '../sortingVisualizer.css';
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, List } from "semantic-ui-react";
import './navbar.css';

 const Navbar = (props) => {
        return(
            <div className='navbar background-color'>
                <Container>
                    <List horizontal>
                        <List.Item>                        
                             <Button color='orange' onClick={props.onMergeSort}>Merge Sort</Button>
                        </List.Item>
                        <List.Item>                        
                            <Button color='blue' onClick={props.onQuickSort}>Quick Sort</Button>
                        </List.Item>
                        <List.Item>                        
                            <Button color='green' onClick={props.onBubbleSort}>Bubble Sort</Button>
                        </List.Item>
                        <List.Item>
                            <Button color='yellow' onClick={props.onInsertionSort}>Insertion Sort</Button>
                        </List.Item>
                    </List>
                    <Button color='brown' floated='right' onClick={props.onRandomize}>Randomize</Button>
                </Container>
            </div>
        );
}

export default Navbar;