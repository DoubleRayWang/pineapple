const errorModel = require("../db/error");
const baseController = require('./base');

class errorController extends baseController {
    async queryError(ctx) {
        let { date, type, time, token } = ctx.query;
        date = date.split(",");
        time = +time;
        type = +type;
        await errorModel.queryError({time, date, token, type}).then(rows => {
            // this.cacaulate(time, rows, field);
            console.log(rows)
            ctx.body = this.setJson({data: this.cacaulateXY(rows, time, 'sum')});
        });
    }
    async queryErrorList(ctx) {
        let { date, type, token, number, offset } = ctx.query;
        date = date.split(",");
        type = +type;
        number = +number;
        offset = +offset;
        const count = await errorModel.queryErrorListCount({date, token, type});
        await errorModel.queryErrorList({date, token, number, offset, type}).then(rows => {
            // 过滤字段
            const list = rows.map(row => {
                return {
                    desc: row.desc,
                    stack: row.stack,
                    url: row.url,
                    agent: this.handleAgent(row.agent),
                    created: row.created,
                    key: row._id
                };
            });
            ctx.body = this.setJson({data: {list, count} });
        });
    }
}

module.exports = errorController;