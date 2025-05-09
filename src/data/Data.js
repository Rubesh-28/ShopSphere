const sampleProducts = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: "550",
      image: "https://media.istockphoto.com/id/1157853716/photo/white-wireless-mouse.jpg?s=612x612&w=0&k=20&c=A9srijwPA3dE_RUhVvv9vdqZBorYjCry-ntatw3kTFo=",
      description: "Experience seamless navigation with our ergonomic wireless mouse featuring precision optical tracking.",
      specifications: [
        "Connectivity: 2.4GHz Wireless",
        "DPI: 1200 (adjustable)",
        "Battery Life: 12 months",
        "Buttons: 6 programmable buttons",
        "Compatibility: Windows, macOS, Linux"
      ],
      category: "Electronics"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "1500",
      image: "https://media.istockphoto.com/id/1380063784/photo/smart-watch-close-up-on-a-white-background-3d-render.jpg?s=612x612&w=0&k=20&c=bIPm5Ei3o8VBY9T7X_9rkZbDFRWeCXBYTS6kWE59ITA=",
      description: "Stay connected and monitor your health with our feature-packed smartwatch.",
      specifications: [
        "Display: 1.4\" AMOLED Touchscreen",
        "Battery: 7 days standby",
        "Features: Heart rate monitor, step counter, sleep tracker",
        "Water Resistance: IP68",
        "Compatibility: Android & iOS"
      ],
      category: "Electronics"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: "900",
      image: "https://media.istockphoto.com/id/1059154330/photo/boombox.jpg?s=612x612&w=0&k=20&c=AYwVrPpREeFXXP0j8rC8R3eF_9WUVghBXPndGqZYSJw=",
      description: "Portable Bluetooth speaker with crystal clear sound and deep bass for your music on the go.",
      specifications: [
        "Output Power: 10W RMS",
        "Battery: 8 hours playtime",
        "Connectivity: Bluetooth 5.0",
        "Range: 10 meters",
        "Extra: Built-in microphone for handsfree calls"
      ],
      category: "Electronics"
    },
    {
      id: 4,
      name: "Laptop",
      price: "55000",
      image: "https://media.istockphoto.com/id/1394988455/photo/laptop-with-a-blank-screen-on-a-white-background.jpg?s=612x612&w=0&k=20&c=BXNMs3xZNXP__d22aVkeyfvgJ5T18r6HuUTEESYf_tE=",
      description: "Powerful laptop for work and entertainment with high-performance components.",
      specifications: [
        "Processor: Intel Core i5 11th Gen",
        "RAM: 8GB DDR4",
        "Storage: 512GB SSD",
        "Display: 15.6\" FHD IPS",
        "OS: Windows 11 Home"
      ],
      category: "Electronics"
    },
    {
      id: 5,
      name: "Mobile Phone",
      price: "17000",
      image: "https://media.istockphoto.com/id/1449090516/photo/mobile-phones-premium-png-digital-devices-for-mockup.jpg?s=612x612&w=0&k=20&c=HaeaTgTSYh8wJHq6L_BoHjQ0CePQFsrGzJyYE933C9g=",
      description: "Feature-rich smartphone with excellent camera and long battery life.",
      specifications: [
        "Display: 6.5\" HD+ IPS LCD",
        "Processor: Snapdragon 680",
        "RAM: 4GB",
        "Storage: 64GB (expandable)",
        "Camera: 50MP + 2MP dual rear, 8MP front"
      ],
      category: "Electronics"
    },
    {
      id: 6,
      name: "Keyboard",
      price: "2900",
      image: "https://media.istockphoto.com/id/1152881215/photo/wireless-bluetooth-computer-keyboard.jpg?s=612x612&w=0&k=20&c=f3JeroAaBNp9tdXaeQmsWMj1XBVkUAZmCzmQY-XWm0w=",
      description: "Mechanical keyboard with responsive keys for comfortable typing experience.",
      specifications: [
        "Type: Mechanical (Red switches)",
        "Backlight: RGB",
        "Connectivity: Wired USB",
        "Key Rollover: N-Key",
        "Extra: Detachable wrist rest"
      ],
      category: "Electronics"
    },
    {
      id: 7,
      name: "Charger",
      price: "500",
      image: "https://media.istockphoto.com/id/484719630/photo/adapter-charger-with-usb-cable-isolate-on-white.jpg?s=612x612&w=0&k=20&c=ezzmK3-gKfQlXzL5JppuuWyQQi2xzfzzsftgI4UCCpM=",
      description: "Fast charger with multiple ports for simultaneous charging of devices.",
      specifications: [
        "Output: 18W Quick Charge 3.0",
        "Ports: 2 USB-A, 1 USB-C",
        "Cable Length: 1.2m",
        "Compatibility: All smartphones/tablets",
        "Safety: Overcharge protection"
      ],
      category: "Electronics"
    },
    {
      id: 8,
      name: "PowerBank",
      price: "600",
      image: "https://media.istockphoto.com/id/614522624/photo/silver-aluminum-power-banks-dark-wooden-background.jpg?s=612x612&w=0&k=20&c=BPiSIKJxuSQ_SxxgwLzxdqQC64p57hfSXnW2-xNSWXQ=",
      description: "Compact power bank with high capacity to keep your devices charged anywhere.",
      specifications: [
        "Capacity: 10000mAh",
        "Output: 5V/2.1A",
        "Input: Micro USB",
        "Charging Cycles: 500+",
        "LED Power Indicator"
      ],
      category: "Electronics"
    },
    {
      id: 9,
      name: "HardDisk",
      price: "1200",
      image: "https://media.istockphoto.com/id/1206607805/photo/hard-disk-drive-hdd-solid-state-drive-ssd-and-ssd-m2-isolated-on-white-set-of-different-data.jpg?s=612x612&w=0&k=20&c=RfdrdFChT8RJ5lioNWTbnWxpH0N3wu_3BUzzfu84kPc=",
      description: "Reliable external storage solution for your important files and backups.",
      specifications: [
        "Capacity: 1TB",
        "Interface: USB 3.0",
        "Speed: 5400 RPM",
        "Compatibility: PC/Mac",
        "Form Factor: 2.5\" portable"
      ],
      category: "Electronics"
    },
    {
      id: 10,
      name: "SSD",
      price: "4000",
      image: "https://media.istockphoto.com/id/1355496681/photo/closeup-nvme-m2-ssd-high-performance-data-storage.jpg?s=612x612&w=0&k=20&c=oIvLoUiMoaXDeBi1Z_-iNxazWI-GQMpSHRNRho5hW8A=",
      description: "Blazing fast NVMe SSD for instant boot times and rapid file transfers.",
      specifications: [
        "Capacity: 500GB",
        "Interface: NVMe PCIe Gen3",
        "Read Speed: 2400MB/s",
        "Write Speed: 1950MB/s",
        "Endurance: 300TBW"
      ],
      category: "Electronics"
    },
    {
      id: 11,
      name: "Men's Denim Jacket",
      price: "2200",
      image: "https://media.istockphoto.com/id/656944018/photo/denim-jacket-dude.jpg?s=612x612&w=0&k=20&c=sAOJ2ibYX5JK_5DcU9Nua5btT7lHLr79WOutpDtK_Q0=",
      description: "Classic blue denim jacket with a rugged edge, perfect for casual outings.",
      specifications: [
        "Material: 100% Cotton",
        "Fit: Regular",
        "Closure: Button-up",
        "Pockets: 4 (2 chest, 2 side)",
        "Wash: Machine washable"
      ],
      category:"Men's Clothing"
    },
    {
      id: 12,
      name: "Women's Maxi Dress",
      price: "1800",
      image: "https://media.istockphoto.com/id/1397516813/photo/beautiful-smiling-blond-woman-in-a-neon-green-maxi-dress.jpg?s=612x612&w=0&k=20&c=QNrSnBEDUqRSc7yN4YbSBYUcHMOsB-sycL0AkwdUmS0=",
      description: "Flowy floral maxi dress with elegant detailing for a breezy summer vibe.",
      specifications: [
        "Fabric: Rayon blend",
        "Neck: V-Neck",
        "Sleeves: Sleeveless",
        "Length: Ankle-length",
        "Care: Dry clean only"
      ],
      category:"Women's Clothing"
    },
    {
      id: 13,
      name: "Men's Leather Belt",
      price: "450",
      image: "https://media.istockphoto.com/id/525213536/photo/brown-leather-belt-isolated-on-white.jpg?s=612x612&w=0&k=20&c=06W-ZyhjwlkbqecRk2ZjulFKPQHDIWFk4dQ4v1VTgQ8=",
      description: "Stylish and durable brown leather belt for formal and casual wear.",
      specifications: [
        "Material: Genuine Leather",
        "Buckle: Metal pin buckle",
        "Width: 1.5 inches",
        "Sizes: 32 to 42 inches",
        "Color: Dark brown"
      ],
      category:"Accessories"
    },
    {
      id: 14,
      name: "Women's Handbag",
      price: "1250",
      image: "https://media.istockphoto.com/id/916257096/photo/pink-women-bag-isolated.jpg?s=612x612&w=0&k=20&c=uskDO5rdc4w1UBfYtPsTXFjvMr8I6upSwd_EbLee9mk=",
      description: "Chic handbag with spacious compartments to carry your everyday essentials.",
      specifications: [
        "Material: PU Leather",
        "Straps: Dual handles & detachable sling",
        "Closure: Zipper",
        "Pockets: 3 compartments + 2 inner pockets",
        "Color: Beige"
      ],
      category:"Accessories"
    },
    {
      id: 15,
      name: "Unisex Sunglasses",
      price: "700",
      image: "https://media.istockphoto.com/id/538338399/vector/aviator-sunglasses-vector-illustration-background.jpg?s=612x612&w=0&k=20&c=Vqhy8NrRFB2y6thJVcSuILDjQXp-9cu3uJbOIJjKQzA=",
      description: "UV-protected, stylish sunglasses to keep your eyes safe in the sun.",
      specifications: [
        "Frame Material: Polycarbonate",
        "Lens Type: Polarized",
        "UV Protection: 100% UVA & UVB",
        "Shape: Wayfarer",
        "Case: Included"
      ],
      category:"Accessories"
    },
    {
      id: 16,
      name: "Men's Formal Watch",
      price: "2500",
      image: "https://media.istockphoto.com/id/165853320/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=DgQbRd67gNDR0rdOpywkHDTBzLB3ahw_CsMPANtWyY8=",
      description: "Elegant wristwatch with a leather strap for a sophisticated look.",
      specifications: [
        "Display: Analog",
        "Strap: Genuine Leather",
        "Water Resistance: 3 ATM",
        "Dial: Round, Black",
        "Warranty: 1 year"
      ],
      category:"Accessories"
    },
    {
      id: 17,
      name: "Women's Statement Necklace",
      price: "650",
      image: "https://media.istockphoto.com/id/495605157/photo/blue-stones-necklaces.jpg?s=612x612&w=0&k=20&c=mJdnzknLYBdWFefx6SnX7mKtsFhhIEJmhrEtGIlvk2U=",
      description: "Bold statement necklace to add sparkle and personality to your outfit.",
      specifications: [
        "Material: Alloy & Rhinestone",
        "Length: 16\" + 2\" extender",
        "Closure: Lobster clasp",
        "Plating: Gold-tone",
        "Occasion: Party, Casual"
      ],
      category:"Accessories"
    },
    {
      id: 18,
      name: "Men's Hoodie",
      price: "1000",
      image: "https://media.istockphoto.com/id/1095258592/photo/portrait-of-rebellious-young-man-wearing-hooded-shirt.jpg?s=612x612&w=0&k=20&c=luQArssupWkJX3dhGnLPxIm8lhRsJL9sUzPSzHnK5M4=",
      description: "Warm and cozy fleece-lined hoodie perfect for casual winter days.",
      specifications: [
        "Material: Cotton blend fleece",
        "Closure: Pullover",
        "Pockets: Kangaroo",
        "Fit: Regular",
        "Colors: Navy, Maroon, Grey"
      ],
      category:"Men's Clothing"
    },
    {
      id: 19,
      name: "Women's Sling Bag",
      price: "800",
      image: "https://media.istockphoto.com/id/924517402/photo/womens-handbag-on-two-pastel-color-background-copy-space.jpg?s=612x612&w=0&k=20&c=jXb87cXrCIwh2oCgLfXxJwWP_3YMlDe0YxgFcwVB-44=",
      description: "Trendy crossbody sling bag to keep your essentials within easy reach.",
      specifications: [
        "Material: Faux Leather",
        "Strap: Adjustable crossbody",
        "Compartments: 1 main + 2 zipper pockets",
        "Closure: Magnetic snap",
        "Color: Pastel pink"
      ],
      category:"Accessories" 
    },
    {
      id: 20,
      name: "Women's Earrings Set",
      price: "550",
      image: "https://media.istockphoto.com/id/2212071462/photo/stylish-silver-rings-on-pink-textured-surface-closeup.jpg?s=612x612&w=0&k=20&c=I1FnUMQs8QrW-CuWtEc4k3kiMv-IubYHmdCR64pwsUU=",
      description: "Elegant earrings set featuring studs and drops to suit any occasion.",
      specifications: [
        "Material: Alloy, Pearl, Crystal",
        "Set: 6 pairs",
        "Back: Push-back",
        "Color: Gold-tone, Silver-tone",
        "Care: Store in dry place"
      ],
      category:"Accessories"
    },
    {
      id: 21,
      name: "Men's Chino Pants",
      price: "1300",
      image: "https://media.istockphoto.com/id/916197610/photo/man-in-blank-black-t-shirt.jpg?s=612x612&w=0&k=20&c=ngB3ZXhBiVeFDC4GD8hyI5ozrYTYGSYTGxCcQZRjbdU=",
      description: "Versatile slim-fit chinos that blend comfort and style effortlessly.",
      specifications: [
        "Fabric: Cotton Stretch",
        "Fit: Slim",
        "Closure: Zip & Button",
        "Pockets: 4",
        "Wash: Machine washable"
      ],
      category:"Men's Clothing"
    },
    {
      id: 22,
      name: "Women's Crop Top",
      price: "600",
      image: "https://media.istockphoto.com/id/1462062864/photo/white-crop-top-mockup-on-posing-girl-in-jeans-isolated-on-background-front-view.jpg?s=612x612&w=0&k=20&c=Ea07KsvieYAUvezMaSDh1xXR4R7yvF-rb9USP_JtAdw=",
      description: "Trendy crop top with a flattering fit and breathable fabric.",
      specifications: [
        "Material: Cotton Blend",
        "Neckline: Round",
        "Sleeves: Short",
        "Pattern: Solid",
        "Style: Casual"
      ],
      category:"Women's Clothing"
    },
    {
      id: 23,
      name: "Unisex Beanie Hat",
      price: "350",
      image: "https://media.istockphoto.com/id/492274456/photo/knit-hat.jpg?s=612x612&w=0&k=20&c=RGC1yrSS6CG23MmE_0-9psSC5oY_fHG1NxHa9FoRJxg=",
      description: "Warm knit beanie to complete your winter outfit with cozy flair.",
      specifications: [
        "Material: Wool blend",
        "Fit: Stretchable",
        "Style: Slouchy",
        "Colors: Black, Gray, Olive",
        "Care: Hand wash recommended"
      ],
      category:"Accessories"
    },
    {
      id: 24,
      name: "Women's Ankle Boots",
      price: "2100",
      image: "https://media.istockphoto.com/id/627429942/photo/womens-shoes.jpg?s=612x612&w=0&k=20&c=7R6ANXiF68rFHCaRgdNRv9MyyqctVtxsmnFbRN2yxYQ=",
      description: "Stylish and sturdy ankle boots ideal for autumn and winter looks.",
      specifications: [
        "Upper: Faux leather",
        "Sole: Rubber",
        "Heel: 2 inch block",
        "Closure: Side zipper",
        "Color: Tan brown"
      ],
      category:"Accessories"
    },
    {
      id: 25,
      name: "Men's Analog Watch",
      price: "1800",
      image: "https://media.istockphoto.com/id/472505316/photo/sleek-leather-watch.jpg?s=612x612&w=0&k=20&c=oDOG6bJh3VQimkju_AbZNk7FKsJeU1uO1ZgF4yif4rY=",
      description: "Timeless analog watch with a stainless steel case and minimalist dial.",
      specifications: [
        "Dial: Minimal black",
        "Strap: Stainless steel",
        "Movement: Quartz",
        "Water Resistance: 5 ATM",
        "Warranty: 1 year"
      ],
      category:"Accessories"
    },
    {
      id: 26,
      name: "Women's Tote Bag",
      price: "1450",
      image: "https://media.istockphoto.com/id/92108041/photo/vintage-handbag.jpg?s=612x612&w=0&k=20&c=KBZApzuNGHhVefkRxkZkHUsIBpjMnT-G2WoQV5rrwT4=",
      description: "Spacious and elegant tote bag perfect for office or travel.",
      specifications: [
        "Material: Vegan Leather",
        "Compartments: 1 main + 3 inner pockets",
        "Closure: Magnetic snap",
        "Strap: Double shoulder handles",
        "Color: Black"
      ],
      category:"Accessories"
    },
    {
      id: 27,
      name: "Men's Casual T-Shirt",
      price: "500",
      image: "https://media.istockphoto.com/id/803944098/photo/casual-navy-blue-mens-singlet-with-copy-space-isolated.jpg?s=612x612&w=0&k=20&c=YYP9fxmQCjrmkWKRR544YnXo6u70OohxiWXY3pK-aYQ=",
      description: "Classic crew-neck t-shirt for everyday comfort and style.",
      specifications: [
        "Fabric: 100% Cotton",
        "Fit: Regular",
        "Neck: Crew",
        "Sleeves: Half",
        "Available Colors: White, Blue, Charcoal"
      ],
      category:"Men's Clothing" 
    },
    {
      id: 28,
      name: "Women's Bracelet Set",
      price: "750",
      image: "https://media.istockphoto.com/id/1059697776/photo/fancy-designer-golden-bracelet-for-woman-fashion-gold-plated-jewelry-closeup-image-on-black.jpg?s=612x612&w=0&k=20&c=eaUMr5ty5v3GMzY9EuN3S1lsW13xSFY6S6nRIpP_jIA=",
      description: "Elegant boho-inspired bracelet set to accessorize your outfits.",
      specifications: [
        "Material: Alloy, beads, threads",
        "Set: 5 assorted designs",
        "Style: Adjustable",
        "Finish: Gold/Beige",
        "Occasion: Casual or Festive"
      ],
      category:"Accessories"
    },
    {
      id: 29,
      name: "Men's Travel Duffel Bag",
      price: "1700",
      image: "https://media.istockphoto.com/id/1492381333/photo/blank-fordable-gym-cardio-fitness-duffel-bag-for-branding.jpg?s=612x612&w=0&k=20&c=_ZvdYK1DfuVUuZLMGWt6ae-kcOPeY3H8gv39AHqWX6k=",
      description: "Spacious duffel bag built for weekend getaways and gym trips.",
      specifications: [
        "Material: Canvas & Faux Leather",
        "Capacity: 35L",
        "Straps: Shoulder + Handheld",
        "Compartments: 1 main + 3 side",
        "Color: Navy blue"
      ],
      category:"Accessories"
    },
    {
      id: 30,
      name: "Women's Ethnic Kurti",
      price: "900",
      image: "https://media.istockphoto.com/id/1712073214/photo/pakistani-model-is-wearing-new-digital-print-dress.jpg?s=612x612&w=0&k=20&c=7glxPIfI0KVb-4D7Uxod0qSbCmRgORYCLTs8osbea50=",
      description: "Traditional yet modern kurti featuring elegant prints and comfort.",
      specifications: [
        "Fabric: Rayon",
        "Neck: Mandarin collar",
        "Length: Knee-length",
        "Sleeves: 3/4th",
        "Style: Straight cut"
      ],
      category:"Women's Clothing"
    },
    {
      "id": 31,
      "name": "Women's Denim Jacket",
      "price": "2200",
      "image": "https://media.istockphoto.com/id/1349960077/photo/rocking-denim-wear.jpg?s=612x612&w=0&k=20&c=fB3hzEp_aOF2lk6QmMW4sUGDiQhhQkgwQ9OOO3VlDHc=",
      "description": "Classic denim jacket with a modern fit and distressed details.",
      "specifications": [
        "Material: 100% Cotton Denim",
        "Closure: Button-front",
        "Pockets: 2 front pockets",
        "Fit: Regular",
        "Care: Machine wash cold"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 32,
      "name": "Women's Palazzo Pants",
      "price": "1200",
      "image": "https://media.istockphoto.com/id/1146261996/photo/full-length-portrait-beautiful-young-girl-wearing-black-crop-top-and-wide-leg-pants-and.jpg?s=612x612&w=0&k=20&c=nUD8NZMs-HgApSzRIiDGdL9FnG-EnFTL4EyO3-jBeOU=",
      "description": "Flowy palazzo pants with elastic waist for ultimate comfort.",
      "specifications": [
        "Fabric: Polyester blend",
        "Waist: Elastic",
        "Length: Full-length",
        "Pattern: Printed",
        "Occasion: Casual/Formal"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 33,
      "name": "Women's Winter Coat",
      "price": "3500",
      "image": "https://media.istockphoto.com/id/1665707222/photo/young-woman-walking-in-snowy-winter-park-wearing-blue-coat-girl-enjoys-landscape-wearing-hat.jpg?s=612x612&w=0&k=20&c=44gUMkrm0qka6Omgl322EM-mQlO5jynIlGUSUFppSYY=",
      "description": "Warm winter coat with faux fur trim and waterproof exterior.",
      "specifications": [
        "Material: Polyester outer with thermal lining",
        "Closure: Zipper with button flap",
        "Pockets: 2 side pockets, 1 inner pocket",
        "Hood: Detachable with faux fur",
        "Care: Dry clean recommended"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 34,
      "name": "Women's Silk Scarf",
      "price": "800",
      "image": "https://media.istockphoto.com/id/621861750/photo/silk-scarf-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=z22VMdcLDSvMK93gHBkY-4dn3wKojp3XHpfVNKbcG_Q=",
      "description": "Luxurious silk scarf with vibrant floral pattern.",
      "specifications": [
        "Material: 100% Silk",
        "Dimensions: 35x35 inches",
        "Pattern: Floral print",
        "Edges: Hand-rolled",
        "Care: Hand wash cold"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 35,
      "name": "Women's High-Waisted Jeans",
      "price": "1900",
      "image": "https://media.istockphoto.com/id/1214456911/photo/smiling-young-woman-full-length-portrait.jpg?s=612x612&w=0&k=20&c=npJVT928Y2YStRUvRSV6y_So37Zievbh_btbK8oHoP4=",
      "description": "Stylish high-waisted jeans with stretch for comfort and flattering fit.",
      "specifications": [
        "Material: 98% Cotton, 2% Elastane",
        "Rise: High waist",
        "Fit: Skinny",
        "Closure: Button and zip",
        "Care: Machine wash"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 36,
      "name": "Women's Lace Blouse",
      "price": "1500",
      "image": "https://media.istockphoto.com/id/1396133681/photo/female-model-wearing-beige-camisole-cotton-top-and-black-trousers-classic-and-simple-summer.jpg?s=612x612&w=0&k=20&c=YpYkglz2quZzFbEIywB--qSw-qeW4soa2NkqmIL4Y1E=",
      "description": "Delicate lace blouse with semi-sheer panels and button detailing.",
      "specifications": [
        "Material: Polyester lace with cotton lining",
        "Neckline: Round neck",
        "Sleeves: Long with cuff",
        "Closure: Front buttons",
        "Occasion: Formal"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 37,
      "name": "Women's Jumpsuit",
      "price": "2100",
      "image": "https://media.istockphoto.com/id/1031501036/photo/attractive-woman-in-striped-jumpsuit.jpg?s=612x612&w=0&k=20&c=SUZhiN8_oz_zopb4Hb6AH2_lTnb07xNIXYyvDcXTe0Y=",
      "description": "Chic one-piece jumpsuit with belt and wide-leg design.",
      "specifications": [
        "Material: Viscose blend",
        "Neckline: V-neck",
        "Waist: Belt included",
        "Pockets: Side pockets",
        "Care: Hand wash recommended"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 38,
      "name": "Women's Satin Slip Dress",
      "price": "2400",
      "image": "https://media.istockphoto.com/id/2203943568/photo/elegant-young-woman-in-a-stylish-dress-posing-against-a-brown-background-showcasing.jpg?s=612x612&w=0&k=20&c=nLUi0XKYHh9APXTlqMfFuvt03tZwPJjN-sQwK2Mt4tM=",
      "description": "Elegant satin slip dress with adjustable straps for evening wear.",
      "specifications": [
        "Material: 100% Polyester satin",
        "Neckline: Square neck",
        "Length: Mid-thigh",
        "Straps: Adjustable",
        "Occasion: Party/Evening"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 39,
      "name": "Women's Wool Sweater",
      "price": "1800",
      "image": "https://media.istockphoto.com/id/499687078/photo/wool-jacket-woman-cardigan.jpg?s=612x612&w=0&k=20&c=rUkUYq20DhCvMi6NvKeQMLVoKbeC_ubYGvqZZMGB85Y=",
      "description": "Warm cable-knit sweater in classic winter colors.",
      "specifications": [
        "Material: 70% Wool, 30% Acrylic",
        "Neckline: Crew neck",
        "Sleeves: Long",
        "Fit: Relaxed",
        "Care: Hand wash in cold water"
      ],
      "category": "Women's Clothing"
    },
    {
      "id": 40,
      "name": "Men's Formal Suit (2-Piece)",
      "price": "6500",
      "image": "https://media.istockphoto.com/id/493116226/photo/happy-smiling-businessman-in-suit.jpg?s=612x612&w=0&k=20&c=JSuvCrREfPOIxvXoyHWbVOl1LG7vT7TQzK6ZO203EuA=",
      "description": "Elegant 2-piece suit with a tailored fit, perfect for weddings and business meetings.",
      "specifications": [
        "Material: Wool blend",
        "Fit: Slim",
        "Includes: Blazer + Trousers",
        "Closure: Single-button blazer",
        "Care: Dry clean only"
      ],
      "category": "Men's Clothing"
    },
    {
      "id": 41,
      "name": "Men's Linen Shirt",
      "price": "1400",
      "image": "https://media.istockphoto.com/id/1407031756/photo/portrait-of-handsome-man.jpg?s=612x612&w=0&k=20&c=GDHKb2cm8dR4hmdPbcxREGU4bVoQz0zU4ngFj7fmOkU=",
      "description": "Breathable linen shirt with a relaxed fit, ideal for summer outings.",
      "specifications": [
        "Material: 100% Linen",
        "Fit: Regular",
        "Collar: Button-down",
        "Sleeves: Full-length (roll-up cuffs)",
        "Care: Machine wash cold"
      ],
      "category": "Men's Clothing"
    },
    {
      "id": 42,
      "name": "Men's Track Pants",
      "price": "1100",
      "image": "https://media.istockphoto.com/id/181517483/photo/sweatpants.jpg?s=612x612&w=0&k=20&c=9EpGBajKtH1y4quoltY0uMB5zagF5dMkPGUL-ZQWXcM=",
      "description": "Comfortable track pants with an elastic waistband, perfect for workouts or lounging.",
      "specifications": [
        "Material: Polyester-cotton blend",
        "Fit: Relaxed",
        "Waist: Elastic with drawstring",
        "Pockets: 2 side pockets",
        "Care: Machine wash"
      ],
      "category": "Men's Clothing"
    },{
      "id": 43,
      "name": "Men's Wool Overcoat",
      "price": "4800",
      "image": "https://media.istockphoto.com/id/587785804/photo/man-coat-isolated-on-white.jpg?s=612x612&w=0&k=20&c=joSr1R_379qfQDrp9l7lnJi_4BIRAI0stZ2KJrmaci0=",
      "description": "Premium wool overcoat with a double-breasted design for winter sophistication.",
      "specifications": [
        "Material: 70% Wool, 30% Polyester",
        "Fit: Regular",
        "Closure: Double-breasted",
        "Pockets: Flap pockets",
        "Care: Dry clean only"
      ],
      "category": "Men's Clothing"
    },
    {
      "id": 44,
      "name": "Men's Printed Hawaiian Shirt",
      "price": "950",
      "image": "https://media.istockphoto.com/id/1616900351/photo/man-is-in-a-hotel-in-cartagena-colombia.jpg?s=612x612&w=0&k=20&c=ntIl5eOvUG_jCP2zs7LB7uvudfibsv-blfj-tJ-X40g=",
      "description": "Vibrant tropical print shirt for a relaxed, vacation-ready look.",
      "specifications": [
        "Material: Rayon blend",
        "Fit: Loose",
        "Collar: Camp collar",
        "Sleeves: Short",
        "Care: Hand wash"
      ],
      "category": "Men's Clothing"
    },
    {
      "id": 45,
      "name": "Men's Bomber Jacket",
      "price": "2900",
      "image": "https://media.istockphoto.com/id/1127217773/photo/childrens-outerwear.jpg?s=612x612&w=0&k=20&c=uokKlZAmydbi3QspXtArVwwW18WXn_q9gE4SsyjCCEU=",
      "description": "Stylish bomber jacket with ribbed cuffs and a lightweight design for casual outings.",
      "specifications": [
        "Material: Nylon outer with polyester lining",
        "Fit: Regular",
        "Closure: Zipper front",
        "Pockets: 2 side pockets",
        "Care: Machine wash cold"
      ],
      "category": "Men's Clothing"
    }
  ];
export default sampleProducts;