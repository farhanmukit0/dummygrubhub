// netlify/functions/sample-function.mjs

export default async (req, context) => {
    const menuData = {
        "menu_info": {
          "currency": "USD",
          "sections": [
            "61157a07dcf1e49912fe9270"
          ]
        },
        "menu_sections": [{
          "external_id": "61157a07dcf1e49912fe9270",
          "name": "GrubHubCategory",
          "internal_name": "GrubHubCategory",
          "description": "GrubHub category with miscellaneous items",
          "items": [
            "fried-chicken",
            "4a6d-93c2-77be78045b6a",
            "41fd-8c93-24a87211068e",
            "cheese_pizza",
            "ecc458e6-17af-498f-8e83-c6c656700a5a"
          ],
          "availability_ranges": [],
          "schedule_ids": [],
          "availability_override": "",
          "media": {
            "source_url": ""
          }
        }],  "items": [{
            "external_id": "fried-chicken",
            "name": "Alex's Bomb Fried Chicken",
            "internal_name": "Alex's Bomb Fried Chicken",
            "description": "Alex's Bomb Fried Chicken",
            "price": 19.99,
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "modifier_prompts": [
              "meat_temperature",
              "entree-sides"
            ],
            "schedule_ids": [],
            "tags": [],
            "nutrition": {
              "calcium": 20,
              "caloric_description": "850 cal – 1100 cal",
              "calories": 690,
              "calories_from_fat": 100,
              "cholesterol": 95,
              "dietary_fiber": 80,
              "ingredient_description": "Lentils, Grilled Bell Peppers",
              "protein": 70,
              "saturated_fat": 60,
              "serving_size": 10,
              "sodium": 50,
              "sugar": 40,
              "tags": [
                "Kosher",
                "Vegan"
              ],
              "total_carbohydrate": 90,
              "trans_fat": 30,
              "vitamin_a": 25,
              "vitamin_d": 20
            },
            "lead_time_seconds": 0,
            "calorie_content": "",
            "metadata": "",
            "availability_ranges": [],
            "allowable_order_types": [],
            "availability_override": "",
            "media": {
              "source_url": ""
            }
          },{
            "external_id": "cheese_pizza",
            "name": "BM's Cheese Pizza",
            "internal_name": "BM's Cheese Pizza",
            "description": "BM's Cheese Pizza",
            "price": 10.00,
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "modifier_prompts": [
              "toppings"
            ],
            "option_groups": [
              "CREATE_YOUR_OWN_SIZES"
            ],
            "schedule_ids": [],
            "tags": [],
            "lead_time_seconds": 0,
            "calorie_content": "",
            "metadata": "",
            "availability_ranges": [],
            "allowable_order_types": [],
            "availability_override": "",
            "media": {
              "source_url": ""
            }
          },  {
            "external_id": "ecc458e6-17af-498f-8e83-c6c656700a5a",
            "name": "sg salad",
            "internal_name": "sg salad",
            "description": "sg salad",
            "price": 11.00,
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "modifier_prompts": [
              "6115784edcf1e49912se9075"
            ],
            "schedule_ids": [],
            "tags": [],
            "lead_time_seconds": 0,
            "calorie_content": "",
            "metadata": "",
            "availability_ranges": [],
            "allowable_order_types": [],
            "availability_override": "",
            "media": {
              "source_url": ""
            }
          }, {
            "external_id": "4a6d-93c2-77be78045b6a",
            "name": "Carbonara",
            "internal_name": "Carbonara",
            "description": "Carbonara",
            "price": 17.99,
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "modifier_prompts": [],
            "schedule_ids": [],
            "tags": [],
            "lead_time_seconds": 0,
            "calorie_content": "",
            "metadata": "",
            "availability_ranges": [],
            "allowable_order_types": [],
            "availability_override": "",
            "media": {
              "source_url": ""
            }
          },
          {
            "external_id": "41fd-8c93-24a87211068e",
            "name": "(Sand.) Hamburger",
            "internal_name": "(Sand.) Hamburger",
            "description": "(Sand.) Hamburger",
            "price": 5.75,
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "modifier_prompts": [
              "meat_temperature",
              "entree-sides"
            ],
            "schedule_ids": [],
            "tags": [],
            "lead_time_seconds": 0,
            "calorie_content": "",
            "metadata": "",
            "availability_ranges": [],
            "allowable_order_types": [],
            "availability_override": "",
            "media": {
              "source_url": ""
            }
          }
        ],  "modifier_prompts": [{
            "external_id": "meat_temperature",
            "name": "Meat Temp",
            "internal_name": "Meat Temp",
            "modifier_list": "4295-b241-d3ceec93a8d7",
            "display_settings": null,
            "defaulted_modifiers": [],
            "modifier_prompt_free_settings": null,
            "modifier_quantity_settings": {
              "too_hot": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626417": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "4d75-8fe9-c07663da7d50": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "4ead-86e5-4f8ccc45a8d9": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "417c-8d5f-d154b729b72f": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "4cbd-b524-c5fa4e89c238": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              }
            },
            "modifier_prompt_quantity_settings": {
              "minimum_units": 0,
              "maximum_units": 5
            },
            "default_selection_model": {
              "minimum_quantity": 0,
              "maximum_quantity": 5
            } 
          },{
            "external_id": "toppings",
            "name": "Toppings",
            "internal_name": "Toppings",
            "modifier_list": "4295-b241-d3ceec93a8d8",
            "display_settings": null,
            "defaulted_modifiers": [],
            "modifier_prompt_free_settings": {
              "free_modifiers": 1
            },
            "modifier_quantity_settings": {
              "bacon": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626419": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626420": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626421": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626422": {
                "default_units": 0,
                "maximum_units": 2,
                "unit_increment": 1
              }
            },
            "modifier_prompt_quantity_settings": {
              "minimum_units": 0,
              "maximum_units": 10
            },
            "default_selection_model": {
              "minimum_quantity": 0,
              "maximum_quantity": 10
            }
          },{
            "external_id": "6115784edcf1e49912se9075",
            "name": "Salad Toppings",
            "internal_name": "Toppings",
            "modifier_list": "4295-b241-d3ceec93a8e9",
            "display_settings": null,
            "defaulted_modifiers": [],
            "modifier_prompt_free_settings": {
              "free_modifiers": 5
            },
            "modifier_quantity_settings": {
              "477f-99ae-6afd01626423": {
                "default_units": 1,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626424": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626425": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626426": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626427": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626428": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626429": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "477f-99ae-6afd01626430": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              }
            },
            "modifier_prompt_quantity_settings": {
              "minimum_units": 1,
              "maximum_units": 10
            },
            "default_selection_model": {
              "minimum_quantity": 1,
              "maximum_quantity": 10
            }
          }, {
            "external_id": "entree-sides",
            "name": "Entree Side",
            "internal_name": "Entree Side",
            "modifier_list": "4a25-8e72-1f06b59a017e",
            "display_settings": null,
            "defaulted_modifiers": [],
            "modifier_prompt_free_settings": null,
            "modifier_quantity_settings": {
              "431f-8608-5bb49bbe1ab2": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "4cdf-bb3b-cc0cc0ee0394": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "446d-b7eb-33b09582b570": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "4f20-87e6-60147b39e14d": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "48fe-804b-88884be62041": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "4062-a114-2ca2a621a634": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "4dbb-8a02-187cd78e3f51": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              },
              "44c2-ad46-326838790459": {
                "default_units": 0,
                "maximum_units": 1,
                "unit_increment": 1
              }
            },
            "modifier_prompt_quantity_settings": {
              "minimum_units": 2,
              "maximum_units": 5
            },
            "default_selection_model": {
              "minimum_quantity": 1,
              "maximum_quantity": 10
            }
          }
        ],  "modifier_lists": [{
            "external_id": "4295-b241-d3ceec93a8d7",
            "name": "Meat Temp",
            "modifiers": [
              "477f-99ae-6afd01626417",
              "too_hot",
              "4d75-8fe9-c07663da7d50",
              "4ead-86e5-4f8ccc45a8d9",
              "417c-8d5f-d154b729b72f",
              "4cbd-b524-c5fa4e89c238"
            ]
          },{
            "external_id": "4295-b241-d3ceec93a8d8",
            "name": "Toppings",
            "modifiers": [
              "bacon",
              "477f-99ae-6afd01626419",
              "477f-99ae-6afd01626420",
              "477f-99ae-6afd01626421",
              "477f-99ae-6afd01626422"
            ]
          },{
            "external_id": "4295-b241-d3ceec93a8e9",
            "name": "Salad Toppings",
            "modifiers": [
              "477f-99ae-6afd01626423",
              "477f-99ae-6afd01626424",
              "477f-99ae-6afd01626425",
              "477f-99ae-6afd01626426",
              "477f-99ae-6afd01626427",
              "477f-99ae-6afd01626428",
              "477f-99ae-6afd01626429",
              "477f-99ae-6afd01626430"
            ]
          },
          {
            "external_id": "4a25-8e72-1f06b59a017e",
            "name": "Entree Side",
            "modifiers": [
              "431f-8608-5bb49bbe1ab2",
              "4cdf-bb3b-cc0cc0ee0394",
              "446d-b7eb-33b09582b570",
              "4f20-87e6-60147b39e14d",
              "48fe-804b-88884be62041",
              "4062-a114-2ca2a621a634",
              "4dbb-8a02-187cd78e3f51",
              "44c2-ad46-326838790459"
            ]
          }
        ],  "modifiers": [{
            "external_id": "477f-99ae-6afd01626417",
            "name": "Beef Prep",
            "internal_name": "Beef Prep",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "bacon",
            "name": "Add Bacon",
            "internal_name": "Bacon",
            "description": "Bacon",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626419",
            "name": "Pepperoni",
            "internal_name": "Pepperoni",
            "description": "Pepperoni",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "too_hot",
            "name": "Beef Prep Rare",
            "internal_name": "Beef Prep Rare",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626420",
            "name": "Garlic",
            "internal_name": "Garlic",
            "description": "Garlic",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626423",
            "name": "Carrots",
            "internal_name": "Carrots",
            "description": "Carrots",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626424",
            "name": "chickpeas",
            "internal_name": "chickpeas",
            "description": "chickpeas",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626425",
            "name": "beets",
            "internal_name": "beets",
            "description": "beets",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626426",
            "name": "swt potato",
            "internal_name": "swt potato",
            "description": "swt potato",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626427",
            "name": "cabbage",
            "internal_name": "cabbage",
            "description": "cabbage",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626428",
            "name": "broccoli",
            "internal_name": "broccoli",
            "description": "broccoli",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626429",
            "name": "lentils",
            "internal_name": "lentils",
            "description": "lentils",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }, {
            "external_id": "477f-99ae-6afd01626430",
            "name": "basil",
            "internal_name": "basil",
            "description": "basil",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4d75-8fe9-c07663da7d50",
            "name": "Beef Prep Med Rare",
            "internal_name": "Beef Prep Med Rare",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4ead-86e5-4f8ccc45a8d9",
            "name": "Beef Prep Medium",
            "internal_name": "Beef Prep Medium",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626421",
            "name": "Sardines",
            "internal_name": "Sardines",
            "description": "Sardines",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },{
            "external_id": "477f-99ae-6afd01626422",
            "name": "Meatball",
            "internal_name": "Meatball",
            "description": "Meatball",
            "calorie_content": "",
            "default_price": 1.00,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "417c-8d5f-d154b729b72f",
            "name": "Beef Prep Med Well",
            "internal_name": "Beef Prep Med Well",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4cbd-b524-c5fa4e89c238",
            "name": "Beef Prep Well Done",
            "internal_name": "Beef Prep Well Done",
            "description": "",
            "calorie_content": "",
            "default_price": 3,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "431f-8608-5bb49bbe1ab2",
            "name": "Sand Baked",
            "internal_name": "Sand Baked",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4cdf-bb3b-cc0cc0ee0394",
            "name": "Sand Double Baked",
            "internal_name": "Sand Double Baked",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "446d-b7eb-33b09582b570",
            "name": "Sand Fries",
            "internal_name": "Sand Fries",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4f20-87e6-60147b39e14d",
            "name": "Sand Mashed ",
            "internal_name": "Sand Mashed ",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "48fe-804b-88884be62041",
            "name": "Sand Rice",
            "internal_name": "Sand Rice",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4062-a114-2ca2a621a634",
            "name": "House Salad",
            "internal_name": "House Salad",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "4dbb-8a02-187cd78e3f51",
            "name": "No Side",
            "internal_name": "No Side",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          },
          {
            "external_id": "44c2-ad46-326838790459",
            "name": "Sand No Potato",
            "internal_name": "Sand No Potato",
            "description": "",
            "calorie_content": "",
            "default_price": 0,
            "tags": [],
            "tax_rate": null,
            "miscellaneous_taxes": [],
            "media": {
              "source_url": ""
            },
            "sized_prices": [],
            "submodifiers": [],
            "metadata": "",
            "schedule_ids": [],
            "availability_ranges": [],
            "availability_override": ""
          }
        ],  "normalized_menu": true,
        "ingestion_type": "NORMALIZED",
        "last_updated": "2023-07-15T15:47:22.124417"
      };
  
    return new Response(JSON.stringify(menuData), {
      headers: { "Content-Type": "application/json" }
    });
  };
  