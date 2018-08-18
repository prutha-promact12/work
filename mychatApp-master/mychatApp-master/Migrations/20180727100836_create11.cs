using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isConnect",
                table: "ChatMessage");

            migrationBuilder.AddColumn<string>(
                name: "isConnect",
                table: "LoginData",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "isConnect",
                table: "LoginData");

            migrationBuilder.AddColumn<string>(
                name: "isConnect",
                table: "ChatMessage",
                nullable: true);
        }
    }
}
