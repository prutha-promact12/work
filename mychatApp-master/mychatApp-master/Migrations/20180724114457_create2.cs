using Microsoft.EntityFrameworkCore.Migrations;

namespace ChatApplication.Migrations
{
    public partial class create2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "status",
                table: "LoginData",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "status",
                table: "LoginData");
        }
    }
}
