import { createContext, Component } from 'react';

//creating Context using Class Component (CC)

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {syntax: '#555', ui: '#ddd', bg: '#eee'}, //text: deep grey | ui button: light grey | bg: lighter grey
        dark: {syntax: '#ddd', ui: '#333', bg: '#555'} //text: light grey | ui button: dark grey | bg: deep grey
     } 

     toggleTheme = () => {
        this.setState( {isLightTheme: !this.state.isLightTheme})
     }
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;