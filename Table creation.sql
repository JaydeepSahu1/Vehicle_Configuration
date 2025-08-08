

CREATE TABLE segment_master (
    seg_id INT PRIMARY KEY AUTO_INCREMENT,         -- Segment ID (Auto Incremented Primary Key)
    seg_name VARCHAR(100) NOT NULL UNIQUE,         -- Segment Name (Mandatory & Unique)
    min_quantity INT NOT NULL                      -- Minimum Quantity (Mandatory)
);


CREATE TABLE mfg_master (
    mfg_id INT PRIMARY KEY AUTO_INCREMENT,   -- Manufacturer ID
    mfg_name VARCHAR(150) NOT NULL UNIQUE    -- Manufacturer Name
);

CREATE TABLE seg_mfg_association (
    seg_mfg_associd INT PRIMARY KEY AUTO_INCREMENT, -- Association ID
    seg_id INT NOT NULL,                     -- Foreign Key from SegmentMaster
    mfg_id INT NOT NULL,                     -- Foreign Key from MfgMaster
    FOREIGN KEY (seg_id) REFERENCES segment_master(seg_id),
    FOREIGN KEY (mfg_id) REFERENCES mfg_master(mfg_id),
    UNIQUE (seg_id,mfg_id)                   -- Prevent duplicate entries
);

CREATE TABLE model_master (
    model_id INT PRIMARY KEY AUTO_INCREMENT,             -- Model ID (Primary Key)
    model_name VARCHAR(150) NOT NULL,                      -- Model Name
    mfg_id INT NOT NULL,                                 -- Manufacturer ID
    seg_id INT NOT NULL,                                 -- Segment ID
    min_qty INT NOT NULL DEFAULT 1,                      -- Minimum Order Quantity
    price DECIMAL(12,2) NOT NULL,                       -- Base Price
    image_path VARCHAR(500),                             -- Path to Model Image

    FOREIGN KEY (mfg_id) REFERENCES mfg_master(mfg_id),    -- Foreign Key to Manufacturer Master
    FOREIGN KEY (seg_id) REFERENCES segment_master(seg_id) -- Foreign Key to Segment Master
);

CREATE TABLE component_master (
    comp_id INT PRIMARY KEY AUTO_INCREMENT,      -- Component ID (Primary Key)
    comp_name VARCHAR(150) NOT NULL UNIQUE       -- Component Name (Must be Unique)
);

CREATE TABLE vehicle_detail(
    config_id INT PRIMARY KEY AUTO_INCREMENT,             -- Configuration ID (Primary Key)
    model_id INT NOT NULL,                               -- Foreign Key from Model Master
    comp_id INT NOT NULL,                                -- Foreign Key from Component Master
    comp_type CHAR(1) NOT NULL CHECK (comp_type IN ('C', 'S', 'I', 'E')), -- Component Type
    is_configurable CHAR(1) NOT NULL CHECK (is_configurable  IN ('Y', 'N')), -- Y/N flag

    FOREIGN KEY (model_id) REFERENCES model_master(model_id),
    FOREIGN KEY (comp_id) REFERENCES component_master(comp_id)
);

CREATE TABLE alternate_component_master (
    alt_id INT PRIMARY KEY AUTO_INCREMENT,                 -- Alternate ID (PK)
    model_id INT NOT NULL,                                 -- FK from Model Master
    comp_id INT NOT NULL,                                  -- Base Component ID
    alt_comp_id INT NOT NULL,                               -- Alternate Component ID
    delta_price DECIMAL(10,2) NOT NULL,                    -- Price adjustment (+/-)

    FOREIGN KEY (model_id) REFERENCES model_master(model_id),
    FOREIGN KEY (comp_id) REFERENCES component_master(comp_id),
    FOREIGN KEY (alt_comp_id) REFERENCES component_master(comp_id)
);

CREATE TABLE invoice_header (
    inv_id INT PRIMARY KEY AUTO_INCREMENT,               -- Invoice ID (Primary Key)
    inv_date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP, -- Invoice Date
    model_id INT NOT NULL,                               -- FK from Model Master
    total_amount DECIMAL(12,2) NOT NULL,                 -- Total before tax
    tax DECIMAL(12,2) NOT NULL,                         -- Tax amount
    final_amount DECIMAL(12,2) NOT NULL,                 -- TotalAmount + Tax
    cust_details VARCHAR(500) NOT NULL,                  -- Customer details (can store JSON/Text)

    FOREIGN KEY (model_id) REFERENCES model_master(model_id)
);

CREATE TABLE invoice_detail (
    inv_dtl_id INT PRIMARY KEY AUTO_INCREMENT,         -- Invoice Detail ID (PK)
    inv_id INT NOT NULL,                              -- FK from InvoiceHeader
    comp_id INT NOT NULL,                             -- FK from ComponentMaster

    FOREIGN KEY (inv_id) REFERENCES invoice_header(inv_id),
    FOREIGN KEY (comp_id) REFERENCES component_master(comp_id)
);



