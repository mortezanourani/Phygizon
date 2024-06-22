import { createElement, useRef } from "react";
import "./index.css";

function TextInput({ id, name, placeholder, className, label, prepend, append, disabled, value, onChange }) {
    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper">
                {
                    (!prepend) ? <></> :
                        <span className="prepend">{prepend}</span>
                }
                <input
                    type="text"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange} />

                {
                    (!append) ? <></> :
                        <span className="append">{append}</span>
                }
            </div>
        </div>
    );
}

function NumberInput({ id, name, placeholder, className, label, prepend, append, disabled, value, onChange }) {
    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper">
                {
                    (!prepend) ? <></> :
                        <span className="prepend">{prepend}</span>
                }
                <input
                    type="number"
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange} />

                {
                    (!append) ? <></> :
                        <span className="append">{append}</span>
                }
            </div>
        </div>
    );
}

function SearchInput({ id, name, className, label, disabled, value, onChange }) {
    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper search">
                <input
                    type="search"
                    id={id}
                    name={name}
                    placeholder="Search"
                    disabled={disabled}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );
}

function MultilineInput({ id, name, placeholder, className, label, disabled, value, onChange }) {
    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper">
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}>
                </textarea>
            </div>
        </div>
    );
}



function ItemsInput({ id, name, placeholder, className, label, disabled, value, onChange }) {
    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    const handleAddItem = (e) => {
        let items = (value) ? [...value.split(',')] : [];

        if (e.key === 'Enter') {
            const newItem = e.target.value.trim();
            if (newItem) {
                items.push(newItem);
                e.target.value = items;
                onChange(e);
            }

            setTimeout(() => {
                e.target.value = "";
            }, 1);
        }
    }

    const handleremoveItem = (e) => {
        let items = [...value.split(',')];

        items.splice(e.target.id, 1);
        e.target.value = items;
        onChange(e);
    }

    const renderItems = () => {
        const items = (value) ? [...value.split(',')] : [];

        return items?.map((text, index) =>
            (!text) ? null :
                createElement(
                    "button",
                    {
                        key: index,
                        id: index,
                        name: name,
                        className: 'input-item',
                        onClick: handleremoveItem,
                    },
                    text
                ));
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper">
                <div className="items-container">
                    {renderItems()}
                </div>
                <textarea
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    disabled={disabled}
                    onKeyDown={handleAddItem} >
                </textarea>
            </div>
        </div>
    );
}



function SelectInput({ id, name, className, label, disabled, options, value, onChange }) {
    const optionsMenuRef = useRef(null);

    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    const handleCollapsed = () => {
        optionsMenuRef.current.classList.toggle("collapsed");
    }

    const handleChange = (e) => {
        onChange(e);
        handleCollapsed();
    }

    const renderSelected = (e) => {
        let text = null;
        options?.map(option => {
            if (option.value === value) {
                text = option.key;
            }
        });

        return text ?? "Select";
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper select">
                <button
                    id={id}
                    name={name}
                    disabled={disabled}
                    onClick={handleCollapsed} >
                    {renderSelected()}
                </button>
                <div className="options" ref={optionsMenuRef}>
                    <div className="options-container">
                        {
                            options?.map((option) =>
                                createElement(
                                    'option',
                                    {
                                        key: option.key,
                                        name: name,
                                        value: option.value,
                                        onClick: handleChange
                                    },
                                    option.key
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function ItemSelectInput({ id, name, className, label, disabled, options, prepend, value, onChange }) {
    const optionsMenuRef = useRef(null);

    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    const handleCollapsed = () => {
        optionsMenuRef.current.classList.toggle("collapsed");
    }

    const handleChange = (e) => {
        onChange(e);
        handleCollapsed();
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper select">
                <button
                    id={id}
                    name={name}
                    disabled={disabled}
                    onClick={handleCollapsed} >
                    {
                        (prepend && value) ?
                            createElement(
                                'img',
                                {
                                    className: "option-prepend",
                                    src: JSON.parse(value)[prepend],
                                    style: { background: JSON.parse(value)[prepend] }
                                },
                            ) : null
                    }
                    {JSON.parse(value)?.name ?? "Select"}
                </button>
                <div className="options" ref={optionsMenuRef}>
                    <div className="options-container">
                        {
                            options?.map((option) =>
                                createElement(
                                    'button',
                                    {
                                        name: name,
                                        value: JSON.stringify(option),
                                        onClick: handleChange
                                    },
                                    (prepend) ?
                                        createElement(
                                            'img',
                                            {
                                                className: "option-prepend",
                                                src: JSON.parse(option)[prepend],
                                                style: { background: JSON.parse(option)[prepend] }
                                            },
                                        ) : null,
                                    JSON.parse(option).name
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

function MultiSelectInput({ id, name, placeholder, className, label, disabled, options, prepend, value, onChange }) {
    const optionsMenuRef = useRef(null);

    className = (!className) ? "form-control" :
        "form-control" + ` ${className}`;

    const handleCollapsed = () => {
        optionsMenuRef.current.classList.toggle("collapsed");
    }

    const handleAddItem = (e) => {
        let items = (value) ? JSON.parse(value) : [];
        items.push(e.target.value);
        const oldValue = e.target.value;
        e.target.value = JSON.stringify(items);
        onChange(e);
        handleCollapsed();

        setTimeout(() => {
            e.target.value = oldValue;
        }, 10);
    }

    const handleremoveItem = (e) => {
        let items = JSON.parse(value);

        items.splice(e.target.id, 1);
        e.target.value = JSON.stringify(items);
        onChange(e);
    }

    const renderItems = () => {
        const items = (value) ? JSON.parse(value) : [];

        return items?.map((item, index) =>
            (!item) ? null :
                createElement(
                    "button",
                    {
                        name: name,
                        id: index,
                        value: JSON.stringify(item),
                        className: 'input-item',
                        onClick: handleremoveItem,
                    },
                    (prepend) ?
                        createElement(
                            'img',
                            {
                                src: JSON.parse(item)[prepend],
                                style: { background: JSON.parse(item)[prepend] }
                            },
                        ) : null,
                    JSON.parse(item).name
                )
        );
    }

    return (
        <div className={className}>
            <label>{label}</label>
            <div className="input-wrapper select">
                <button
                    id={id}
                    name={name}
                    disabled={disabled}
                    onClick={handleCollapsed} >
                    {placeholder}
                </button>
                <div className="options" ref={optionsMenuRef}>
                    <div className="options-container">
                        {
                            options?.map((option) =>
                                createElement(
                                    'button',
                                    {
                                        name: name,
                                        value: JSON.stringify(option),
                                        onClick: handleAddItem
                                    },
                                    (prepend) ?
                                        createElement(
                                            'img',
                                            {
                                                className: "option-prepend",
                                                src: option[prepend],
                                                style: { background: option[prepend] }
                                            },
                                        ) : null,
                                    option.name
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="input-wrapper">
                <div className="items-container">
                    {renderItems()}
                </div>
            </div>
        </div>
    );
}

export {
    TextInput,
    NumberInput,
    SearchInput,
    MultilineInput,
    ItemsInput,
    SelectInput,
    ItemSelectInput,
    MultiSelectInput
};