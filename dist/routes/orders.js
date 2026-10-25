"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderRoutes = void 0;
const validation_1 = require("../data/validation");
const data_1 = require("../data");
const passport_1 = __importDefault(require("passport"));
const createOrderRoutes = (app) => {
    app.get("/checkout/google", passport_1.default.authenticate("google"));
    app.get("/signin-google", passport_1.default.authenticate("google", { successRedirect: "/checkout", keepSessionInfo: true }));
    app.get("/checkout", async (req, resp) => {
        if (!req.session.orderData && req.user) {
            req.session.orderData = {
                customer: await validation_1.CustomerValidator.validate(req.user),
                address: await validation_1.AddressValidator.validate(await data_1.customer_repository.getCustomerAddress(req.user?.id ?? 0) ?? {})
            };
        }
        req.session.pageSize =
            req.session.pageSize ?? req.query.pageSize?.toString() ?? "3";
        resp.render("order_details", {
            order: req.session.orderData,
            page: 1,
            pageSize: req.session.pageSize
        });
    });
    // ...other routes omitted for brevity...
};
exports.createOrderRoutes = createOrderRoutes;
