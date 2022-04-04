import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>
            <section>
                <h2>What is the purpose of context api??</h2>
                <h3>ans:</h3>
                <p>The React Context allows us to provide data through components. With it, we don't need to pass them down manually through every level of components. We can also update the data from any child component. Doing so affects all the other places that use the same context.This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </section>
            <section>
                <h2>Difference among the Block, Inline and Inline-block elements.</h2>
                <h3>ans:</h3>
                <p>
                    Inline elements: Inline elements occupy only enough width that is sufficient to it and allows other elements next to it which are inline. Inline elements do not start from a new line and do not have top and bottom margins as block elements have.

                    Block elements: They consume the entire width available irrespective of their sufficiency. They always start in a new line and have top and bottom margins. It does not contain any other elements next to it.

                    Inline-Block elements: The display value of inline-block works similarly to inline with one exception: the height and width of that element become modifiable.
                </p>
            </section>
            <section>
                <h2>What is semantic tag ?</h2>
                <h3>ans:</h3>
                <p>Semantic HTML5 is one of those seemingly small details that hits right at the core of indexing that is often underestimated. Accurately implemented semantic HTML5 gives a big helping hand to the indexing algorithms used by Googlebot and Bingbot.Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.Elements such as header , footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.
                </p>
            </section>

        </div>
    );
};

export default Blogs;