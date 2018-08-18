using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "recievemsg",
                table: "LoginData",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "sendmsg",
                table: "LoginData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "recievemsg",
                table: "LoginData");

            migrationBuilder.DropColumn(
                name: "sendmsg",
                table: "LoginData");
        }
    }
}
